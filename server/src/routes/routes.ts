// TODO : automate this via an api call or cache based system
// this is a temporary solution, can be significantly improved
// refer to global.ts
import getQuestion from "./getQuestion";
import playMode from "./playModes";
import submitAnswer from "./submitAnswer";
import handleAuth from "./authentication";

export const routes = [getQuestion, playMode, submitAnswer, handleAuth];
