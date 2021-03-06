import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const fromBase64 = value => Buffer.from(value, 'base64').toString('ascii');

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
        });
        await doc.loadInfo();

        const sheet = await doc.sheetsByIndex[2];
        await sheet.loadCells("A2:B2");

        const showPromotionCell = sheet.getCell(1, 0);
        const textCell = sheet.getCell(1, 1);

        return res.end(JSON.stringify({
            showCoupon: showPromotionCell.value === 'VERDADEIRO',
            message: textCell.value
        }));
    }
    catch (err) {
        return res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }
};