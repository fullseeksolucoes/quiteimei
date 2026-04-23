export enum CompanyType {
  MEI = "MEI",
  ME = "ME",
}

export enum FiscalObligationType {
  DAS = "DAS",
  DASN = "DASN",
  DEFIS = "DEFIS",
  DCTF = "DCTF",
  ESOCIAL = "ESOCIAL",
}

export enum AlertChannel {
  WHATSAPP = "WHATSAPP",
  EMAIL = "EMAIL",
  PUSH = "PUSH",
}

export enum AlertLeadDays {
  ONE = 1,
  THREE = 3,
  SEVEN = 7,
  FIFTEEN = 15,
}

export enum FiscalHealthStatus {
  GREEN = "GREEN",
  YELLOW = "YELLOW",
  RED = "RED",
}

export enum SubscriptionPlan {
  FREE = "FREE",
  MEI = "MEI",
  ME_ESSENTIAL = "ME_ESSENTIAL",
  ME_COMPLETE = "ME_COMPLETE",
}

export interface CnpjData {
  cnpj: string;
  name: string;
  type: CompanyType;
  cnae: string;
  openedAt: string;
  status: string;
}

export interface FiscalHealth {
  status: FiscalHealthStatus;
  dasUpToDate: boolean;
  annualDeclarationFiled: boolean;
  revenueWithinLimit: boolean;
  noPendingObligations: boolean;
}

export interface RevenueProgress {
  current: number;
  limit: number;
  percentage: number;
  projectedYearEnd: number | null;
}
