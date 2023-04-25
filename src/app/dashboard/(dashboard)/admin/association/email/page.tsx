"use client";
import clsx from "clsx";
import Md from "markdown-it";
import dynamic from "next/dynamic";
import { Field, Form, FormSpy } from "react-final-form";
import { toast } from "react-toastify";
import { reactApi } from "~/utils/api";

const EditorField = dynamic(
  () => import("~/forms/fields/editor").then((m) => m.EditorField),
  {
    ssr: false,
  }
);
const md = Md();

const EventEmail = () => {
  const { mutateAsync: sendEmail } =
    reactApi.association.admin.sendEmail.useMutation();

  return (
    <div>
      <Form<{
        subject: string;
        email: string;
        preview: string;
        testing: boolean;
        tested: boolean;
      }>
        onSubmit={async (values) => {
          await toast.promise(
            sendEmail({
              content: baseEmail(md.render(values.email)),
              subject: values.subject,
              preview: values.preview,
              isTest: values.testing,
            }),
            {
              pending: "Invio Email...",
              success: "Mail Inviata ✅",
              error: "Errore 🤯",
            }
          );
        }}
        initialValues={{
          email: "Ciao {{ name }}",
          subject: "Mail Per i soci",
          preview: "Caro Socio",
          testing: true,
          tested: false,
        }}
      >
        {({ handleSubmit, form, values, submitting }) => (
          <div className="grid h-screen max-h-screen grid-cols-2">
            <div className="overflow-y-scroll">
              <FormSpy
                render={({ values }) => {
                  const html = md.render(values.email);
                  return (
                    <>
                      <div
                        dangerouslySetInnerHTML={{ __html: baseEmail(html) }}
                      ></div>
                    </>
                  );
                }}
              />
            </div>
            <form onSubmit={handleSubmit} className="overflow-y-scroll">
              <div className="mx-4 my-2">
                <Field
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="subject"
                  render={({ input, meta }) => {
                    return (
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Oggetto
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            {...input}
                          />
                        </div>
                        <div className="mt-1 flex h-5 justify-between text-xs">
                          <span className="text-sm text-red-400">
                            {meta.error}
                          </span>
                          <span className={"text-stone-400"}>
                            {input.value.length} / 100
                          </span>
                        </div>
                      </div>
                    );
                  }}
                />
              </div>
              <div className="mx-4 my-2">
                <Field
                  type="text"
                  name="preview"
                  id="preview"
                  autoComplete="preview"
                  render={({ input, meta }) => {
                    return (
                      <div>
                        <label
                          htmlFor="preview"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Preview Email
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            {...input}
                          />
                        </div>
                        <div className="mt-1 flex h-5 justify-between text-xs">
                          <span className="text-sm text-red-400">
                            {meta.error}
                          </span>
                          <span className={"text-stone-400"}>
                            {input.value.length} / 100
                          </span>
                        </div>
                      </div>
                    );
                  }}
                />
              </div>
              <div className="h-1/2">
                <EditorField name="email" />
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className={clsx("btn-sm btn", {
                    loading: submitting,
                  })}
                  type="submit"
                  onClick={() => {
                    form.change("testing", true);
                    form.change("tested", true);
                  }}
                >
                  Invia Email di Test
                </button>
                <button
                  className={clsx("btn-accent btn-sm btn", {
                    loading: submitting,
                  })}
                  type="submit"
                  disabled={!values.tested}
                  onClick={() => {
                    form.change("testing", false);
                  }}
                >
                  Invia Email a tutti
                </button>
              </div>
            </form>
          </div>
        )}
      </Form>
    </div>
  );
};

export default EventEmail;

const baseEmail = (
  html: string
) => `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title>Discount Light</title><!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
p { display:block;margin:13px 0; }</style><!--[if mso]>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]--><!--[if lte mso 11]>
<style type="text/css">
.mj-outlook-group-fix { width:100% !important; }
</style>
<![endif]--><style type="text/css">@media only screen and (min-width:480px) {
.mj-column-per-100 { width:100% !important; max-width: 100%; }
}</style><style media="screen and (min-width:480px)">.moz-text-html .mj-column-per-100 { width:100% !important; max-width: 100%; }</style><style type="text/css">@media only screen and (max-width:480px) {
table.mj-full-width-mobile { width: 100% !important; }
td.mj-full-width-mobile { width: auto !important; }
}</style></head><body style="word-spacing:normal;background-color:#E7E7E7;"><div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">{{preview}}</div><div style="background-color:#E7E7E7;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f472b6;background-color:#f472b6;width:100%;"><tbody><tr><td><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#f472b6" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:100px;"><img alt height="auto" src="https://res.cloudinary.com/dbdvy5b2z/image/upload/w_100/v1661609934/fy/logos/fy-white_khjfr9.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100"></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="body-section-outlook" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div class="body-section" style="-webkit-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); -moz-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); margin: 0px auto; max-width: 600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0px;padding-top:0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;padding-left:15px;padding-right:15px;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:570px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><tbody><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:24px;text-align:left;color:#212b35;"></div></td></tr><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;">${html}</div></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="margin:0px auto;max-width:600px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]--><div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:top;padding:0px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="center" style="font-size:0px;padding:0px;word-break:break-word;"><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]--><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;"><tr><td style="padding:4px;vertical-align:middle;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#0077b5;border-radius:3px;width:30px;"><tr><td style="font-size:0;height:30px;vertical-align:middle;width:30px;"><a href="https://www.linkedin.com/company/farmaceutica-younger/" target="_blank"><img height="30" src="https://www.mailjet.com/images/theme/v1/icons/ico-social/linkedin.png" style="border-radius:3px;display:block;" width="30"></a></td></tr></table></td></tr></table><!--[if mso | IE]></td></tr></table><![endif]--></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:16px;text-align:center;color:#445566;">Stai ricevendo questa mail perchè ti sei un socio di Farmaceutica Younger!.</div></td></tr><tr><td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:16px;text-align:center;color:#445566;">&copy; Farmaceutica Younger, All Rights Reserved.</div></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div></body></html>`;
