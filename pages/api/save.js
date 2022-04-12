import { GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

const generateCoupon = () => {
    const code = parseInt(moment().format('MMYYDDHHhmmss')).toString(16).toUpperCase();
    return code;
};

export default async (req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
        });
        await doc.loadInfo();
        const sheet = await doc.sheetsByIndex[1];

        const sheetConfig = await doc.sheetsByIndex[2];
        await sheetConfig.loadCells("A2:B2");

        const showPromotionCell = sheetConfig.getCell(1, 0);
        const textCell = sheetConfig.getCell(1, 1);

        let Coupon, Promo = '';

        if (showPromotionCell.value === 'VERDADEIRO') {
            Coupon = generateCoupon();
            Promo = textCell.value;
        }

        const data = JSON.parse(req.body);
        sheet.addRow({
            ...data,
            Coupon,
            Promo,
            'Date Sent': moment().format('DD/MM/YYYY HH:mm:ss')
        });

        return res.end(JSON.stringify({
            showCoupon: Coupon !== '',
            Coupon,
            Promo
        }));
    }
    catch (err) {
        res.end('error');
    }
};