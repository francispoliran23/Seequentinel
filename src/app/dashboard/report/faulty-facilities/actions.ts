"use server";

import { faultyFacilitiesSchema } from "@/lib/zod";
import { postReportUseCase } from "@/use-cases/faulty-facilities";
import { createServerAction } from "zsa";

const faultyFacilitiesAction = createServerAction()
  .input(faultyFacilitiesSchema)
  .handler(async ({ input }) => {
    const data = await postReportUseCase(input);
    return data;
  });

export default faultyFacilitiesAction;
