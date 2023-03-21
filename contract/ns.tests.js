import { Secp256k1KeyIdentity } from "@dfinity/identity-secp256k1";
import {
  TestFunction,
  createWrite,
  FunctionType,
} from "@execution-machine/sdk";
import { readFileSync } from "fs";

async function generatePayload() {
  try {
    const identity = Secp256k1KeyIdentity.generate();
    const signature = await identity.sign("hello world");
    const rawPublicKey = identity.getPublicKey().toRaw();

    const moleculePubKey = btoa(new Uint8Array(rawPublicKey));
    const moleculeSig = btoa(new Uint8Array(signature));

    return {
    	function: "register",
    	name: "atomic",
    	signature: moleculeSig,
    	caller: moleculePubKey
    }
  } catch (error) {
    console.log(error);
    return {};
  }
}

async function testWrite() {
  try {
    const payload = await generatePayload();
    const testAttempt = await TestFunction({
      functionSource: readFileSync("./contract/ns.js"),
      functionType: FunctionType.JAVASCRIPT,
      functionInitState: JSON.parse(readFileSync("./contract/ns.json", "utf-8")),
      writes: [createWrite(payload)],
    });

    console.log(JSON.stringify(testAttempt.state, null, 4));
  } catch (error) {
    console.log(error);
  }
}

testWrite();
