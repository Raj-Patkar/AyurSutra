// therapyData.js
import xlsx from "xlsx";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "../Advanced_Panchakarma_Therapy_Master_Sheet.xlsx");

const workbook = xlsx.readFile(filePath);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const therapies = xlsx.utils.sheet_to_json(sheet);

export default therapies;
