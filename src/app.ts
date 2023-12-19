// app.ts
import express from 'express';
import { Router } from './delivery/router';
import { AppDataSource } from './infrastructure/internal/database/postgresql/datasource';

class Cmd {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.router();
  }

  private router() {
    this.app.use(express.json())
    new Router(this.app);
  }

  public async initialize() {
    try {
      await AppDataSource.initialize();
    } catch (error) {
      console.log("Failed to initialize the database:", error);
      throw error;
    }
  }

  public getApp() {
    return this.app;
  }
}

export { Cmd };
