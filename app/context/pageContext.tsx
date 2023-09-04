import { createContext } from "react";
import { PageDefContextValue } from "../types";

const PageDefContext = createContext<PageDefContextValue | null>(null);

export default PageDefContext;
