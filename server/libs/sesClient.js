import { SESClient } from "@aws-sdk/client-ses";


// Create SES service object.
const sesClient = new SESClient({ 
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
 });
export { sesClient };