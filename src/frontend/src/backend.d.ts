import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    id: bigint;
    name: string;
    businessType: string;
    requirement: string;
    timestamp: bigint;
}
export interface backendInterface {
    getLeads(): Promise<Array<Lead>>;
    submitLead(name: string, businessType: string, requirement: string): Promise<{
        id: bigint;
    }>;
}
