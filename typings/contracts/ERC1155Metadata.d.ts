/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ERC1155MetadataInterface extends Interface {
  functions: {
    uri: TypedFunctionDescription<{ encode([_id]: [BigNumberish]): string }>;
  };

  events: {
    URI: TypedEventDescription<{
      encodeTopics([_uri, _id]: [null, BigNumberish | null]): string[];
    }>;
  };
}

export class ERC1155Metadata extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ERC1155Metadata;
  attach(addressOrName: string): ERC1155Metadata;
  deployed(): Promise<ERC1155Metadata>;

  on(event: EventFilter | string, listener: Listener): ERC1155Metadata;
  once(event: EventFilter | string, listener: Listener): ERC1155Metadata;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ERC1155Metadata;
  removeAllListeners(eventName: EventFilter | string): ERC1155Metadata;
  removeListener(eventName: any, listener: Listener): ERC1155Metadata;

  interface: ERC1155MetadataInterface;

  functions: {
    uri(_id: BigNumberish): Promise<string>;
  };

  uri(_id: BigNumberish): Promise<string>;

  filters: {
    URI(_uri: null, _id: BigNumberish | null): EventFilter;
  };

  estimate: {
    uri(_id: BigNumberish): Promise<BigNumber>;
  };
}
