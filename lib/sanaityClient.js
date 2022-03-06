import sanityClient from "@sanity/Client";

export const client = sanityClient({
  projectId: "to0y2w15",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skA0M009AqEuEKqV6da3OD9t0DPTOPopkHHRyk8qAmLIRcN2vHnJfJp2JihGkWa8eL5LseL1WUyTZnGsnQMCyqGpnpZTG4KeY9KPolvomT7ryhE85YphDTLMKa4pVMezECth8dCWAoVsf2u3v7LieG2LTTmOo27YwPUybczBDK0v04KIQwGi",
  useCdn: false,
});
