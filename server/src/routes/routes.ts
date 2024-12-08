// TODO : automate this via an api call or cache based system
// refer to global.ts
import getQuestion from "./getQuestion";
import playMode from "./playModes";
import submitAnswer from "./submitAnswer";
import handleAuth from "./authentication";
import { routes_data } from "../../globals";

export const routes = [getQuestion, playMode, submitAnswer, handleAuth];
