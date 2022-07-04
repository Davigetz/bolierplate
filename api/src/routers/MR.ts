import { Router } from "express";
import ThemeArouter from "./ThemeArouter";
import ThemeBRouter from "./ThemeBRouter";

class MasterRouter {
  private _router = Router();
  private _subrouterA = ThemeArouter;
  private _subrouterB = ThemeBRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use("/themeA", this._subrouterA);
    this._router.use("/themeB", this._subrouterB);
  }
}

export = new MasterRouter().router;
