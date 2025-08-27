import { sequelize } from "../config/db.js";

export async function syncModels() {
  try {
    await sequelize.sync();
    console.log("✅ Models synced");
  } catch (err) {
    console.error("❌ Model sync error:", err);
  }
}
