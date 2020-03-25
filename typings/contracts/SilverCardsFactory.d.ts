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

interface SilverCardsFactoryInterface extends Interface {
  functions: {
    getOwner: TypedFunctionDescription<{ encode([]: []): string }>;

    transferOwnership: TypedFunctionDescription<{
      encode([_newOwner]: [string]): string;
    }>;

    registerIDs: TypedFunctionDescription<{
      encode([_ids]: [BigNumberish[]]): string;
    }>;

    deregisterIDs: TypedFunctionDescription<{
      encode([_ids]: [BigNumberish[]]): string;
    }>;

    updateCardPrice: TypedFunctionDescription<{
      encode([_newPrice]: [BigNumberish]): string;
    }>;

    withdraw: TypedFunctionDescription<{
      encode([_recipient]: [string]): string;
    }>;

    onERC1155Received: TypedFunctionDescription<{
      encode([, _from, _id, _amount, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    onERC1155BatchReceived: TypedFunctionDescription<{
      encode([_operator, _from, _ids, _amounts, _data]: [
        string,
        string,
        BigNumberish[],
        BigNumberish[],
        Arrayish
      ]): string;
    }>;

    getPurchasableStatus: TypedFunctionDescription<{
      encode([_ids]: [BigNumberish[]]): string;
    }>;

    getFactoryManager: TypedFunctionDescription<{ encode([]: []): string }>;

    getArcadeumCoin: TypedFunctionDescription<{ encode([]: []): string }>;

    getArcadeumCoinID: TypedFunctionDescription<{ encode([]: []): string }>;

    getCardPrice: TypedFunctionDescription<{ encode([]: []): string }>;

    supportsInterface: TypedFunctionDescription<{
      encode([interfaceID]: [Arrayish]): string;
    }>;
  };

  events: {
    CardPriceChange: TypedEventDescription<{
      encodeTopics([oldPrice, newPrice]: [null, null]): string[];
    }>;

    CardsPurchased: TypedEventDescription<{
      encodeTopics([
        recipient,
        tokensBoughtIds,
        tokensBoughtAmounts,
        totalCost
      ]: [string | null, null, null, null]): string[];
    }>;

    IDsDeregistration: TypedEventDescription<{
      encodeTopics([ids]: [null]): string[];
    }>;

    IDsRegistration: TypedEventDescription<{
      encodeTopics([ids]: [null]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;
  };
}

export class SilverCardsFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): SilverCardsFactory;
  attach(addressOrName: string): SilverCardsFactory;
  deployed(): Promise<SilverCardsFactory>;

  on(event: EventFilter | string, listener: Listener): SilverCardsFactory;
  once(event: EventFilter | string, listener: Listener): SilverCardsFactory;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): SilverCardsFactory;
  removeAllListeners(eventName: EventFilter | string): SilverCardsFactory;
  removeListener(eventName: any, listener: Listener): SilverCardsFactory;

  interface: SilverCardsFactoryInterface;

  functions: {
    getOwner(): Promise<string>;

    transferOwnership(
      _newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    registerIDs(
      _ids: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deregisterIDs(
      _ids: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    updateCardPrice(
      _newPrice: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    withdraw(
      _recipient: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getPurchasableStatus(_ids: BigNumberish[]): Promise<boolean[]>;

    getFactoryManager(): Promise<string>;

    getArcadeumCoin(): Promise<string>;

    getArcadeumCoinID(): Promise<BigNumber>;

    getCardPrice(): Promise<BigNumber>;

    supportsInterface(interfaceID: Arrayish): Promise<boolean>;
  };

  getOwner(): Promise<string>;

  transferOwnership(
    _newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  registerIDs(
    _ids: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  deregisterIDs(
    _ids: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  updateCardPrice(
    _newPrice: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  withdraw(
    _recipient: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    _from: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  onERC1155BatchReceived(
    _operator: string,
    _from: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getPurchasableStatus(_ids: BigNumberish[]): Promise<boolean[]>;

  getFactoryManager(): Promise<string>;

  getArcadeumCoin(): Promise<string>;

  getArcadeumCoinID(): Promise<BigNumber>;

  getCardPrice(): Promise<BigNumber>;

  supportsInterface(interfaceID: Arrayish): Promise<boolean>;

  filters: {
    CardPriceChange(oldPrice: null, newPrice: null): EventFilter;

    CardsPurchased(
      recipient: string | null,
      tokensBoughtIds: null,
      tokensBoughtAmounts: null,
      totalCost: null
    ): EventFilter;

    IDsDeregistration(ids: null): EventFilter;

    IDsRegistration(ids: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimate: {
    getOwner(): Promise<BigNumber>;

    transferOwnership(_newOwner: string): Promise<BigNumber>;

    registerIDs(_ids: BigNumberish[]): Promise<BigNumber>;

    deregisterIDs(_ids: BigNumberish[]): Promise<BigNumber>;

    updateCardPrice(_newPrice: BigNumberish): Promise<BigNumber>;

    withdraw(_recipient: string): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      _from: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish
    ): Promise<BigNumber>;

    getPurchasableStatus(_ids: BigNumberish[]): Promise<BigNumber>;

    getFactoryManager(): Promise<BigNumber>;

    getArcadeumCoin(): Promise<BigNumber>;

    getArcadeumCoinID(): Promise<BigNumber>;

    getCardPrice(): Promise<BigNumber>;

    supportsInterface(interfaceID: Arrayish): Promise<BigNumber>;
  };
}
