import { Container, Grid, Typography } from "@mui/material";
import Head from "next/head";

type Props = {};

function Newsletter({}: Props) {
	return (
		<>
			<Head>
				<link
					href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
					rel="stylesheet"
					type="text/css"
				/>

				<script
					async
					type="text/javascript"
					src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
				></script>
			</Head>

			<Typography
				fontWeight={"bold"}
				textAlign={"center"}
				mt={5}
				id="Newsletter"
			>
				¿Te gustaría sumarte al newsletter de &quot;asistente de salud&quot;
				para estar al tanto de los avances mas importantes?
			</Typography>
			<Container
				maxWidth={"sm"}
				sx={{ paddingBottom: "300px", paddingTop: "50px" }}
			>
				<Grid container alignItems={"center"}>
					<Grid item xs={12} textAlign={"center"}>
						<div id="mc_embed_signup">
							<form
								action="https://hotmail.us6.list-manage.com/subscribe/post?u=292cfc0103a9fa26e4760d54d&amp;id=903451f2e9&amp;v_id=3843&amp;f_id=00e82ae3f0"
								method="post"
								id="mc-embedded-subscribe-form"
								name="mc-embedded-subscribe-form"
								className="validate"
								target="_blank"
								noValidate
							>
								<div id="mc_embed_signup_scroll">
									{/* <h2>
										¿Te gustaria sumarte al newsletter de &quot;asistente de
										salud&quot; para estar enterado de los avances mas
										importantes?
									</h2> */}
									{/* <div className="indicates-required">
										<span className="asterisk">*</span> indicates required
									</div> */}
									<div
										className="mc-field-group"
										style={{ margin: 0, padding: 0 }}
									>
										<label htmlFor="mce-EMAIL" style={{ textAlign: "center" }}>
											¿Cual es tu dirección de correo electrónico?{" "}
											{/* <span className="asterisk">*</span> */}
										</label>
										<input
											type="email"
											name="EMAIL"
											className="required email"
											id="mce-EMAIL"
											required
										/>
										<span
											id="mce-EMAIL-HELPERTEXT"
											style={{ backgroundColor: "transparent" }}
											className="helper_text"
										></span>
									</div>
									{/* <div
										style={{
											visibility: "hidden",
											display: "block",
											minHeight: 0,
											height: 0,
											margin: 0,
											padding: 0,
										}}
										id="mergeRow-gdpr"
										className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
									>
										<div className="content__gdpr" >
											<label>Marketing Permissions</label>
											<p>
												Please select all the ways you would like to hear from :
											</p>
											<fieldset
												className="mc_fieldset gdprRequired mc-field-group"
												name="interestgroup_field"
											>
												<label
													className="checkbox subfield"
													htmlFor="gdpr_85467"
												>
													<span>Email</span>{" "}
												</label>
											</fieldset>
											<p>
												You can unsubscribe at any time by clicking the link in
												the footer of our emails. For information about our
												privacy practices, please visit our website.
											</p>
										</div>
										<div className="content__gdprLegal">
											<p>
												We use Mailchimp as our marketing platform. By clicking
												below to subscribe, you acknowledge that your
												information will be transferred to Mailchimp for
												processing.{" "}
												<a
													href="https://mailchimp.com/legal/terms"
													target="_blank"
												>
													Learn more about Mailchimp&apos;s privacy practices
													here.
												</a>
											</p>
										</div>
									</div> */}
									<div
										id="mce-responses"
										className="clear foot"
										style={{
											margin: 0,
											padding: 0,
											textAlign: "center",
											display: "block",
											width: "100%",
										}}
									>
										<div
											className="response"
											id="mce-error-response"
											style={{
												display: "none",
												width: "100%",
												margin: 0,
												padding: 0,
											}}
										></div>
										<div
											className="response"
											id="mce-success-response"
											style={{
												display: "none",
												width: "100%",
												margin: 0,
												padding: 0,
											}}
										></div>
									</div>
									<div
										style={{
											visibility: "hidden",
											display: "block",
											minHeight: 0,
											height: 0,
											margin: 0,
											padding: 0,
										}}
										aria-hidden="true"
									>
										<input
											type="text"
											name="b_292cfc0103a9fa26e4760d54d_903451f2e9"
											tabIndex={-1}
											value=""
										/>

										{/* <input
											type="checkbox"
											id="gdpr_85467"
											name="gdpr[85467]"
											value="Y"
											className="av-checkbox gdpr"
											checked={true}
										/> */}
									</div>
									<div
										className="optionalParent" /* 
									style={{
										visibility: "hidden",
                                        display: 'block',
                                        minHei
										height: 0,
										margin: 0,
										padding: 0,
									}} */
									>
										<div className="clear foot">
											<input
												type="submit"
												value="¡Suscribirme!"
												name="subscribe"
												id="mc-embedded-subscribe"
												className="button"
											/>

											<p className="brandingLogo">
												<a
													href="http://eepurl.com/hKTI3D"
													title="Mailchimp - email marketing made easy and fun"
												>
													<img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
												</a>
											</p>
										</div>
									</div>
								</div>
							</form>
						</div>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default Newsletter;
