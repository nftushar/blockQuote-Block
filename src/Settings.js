import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import produce from "immer";
import {
	PanelBody,
	TabPanel,
	TextControl,
	TextareaControl,
	__experimentalUnitControl as UnitControl,
	__experimentalBoxControl as BoxControl

} from "@wordpress/components";
import {
	BorderControl,
	MultiShadowControl,
	BtnGroup,
	BColor,
	Typography,
	Background
} from "../../Components";
import { SelectControl } from "@wordpress/components";


const alignments = [
	{ label: __("left", "rating"), value: "left", icon: "editor-alignleft" },
	{
		label: __("center", "rating"),
		value: "center",
		icon: "editor-aligncenter",
	},
	{ label: __("right", "rating"), value: "right", icon: "editor-alignright" },
];

const Settings = ({ attributes, setAttributes }) => {
	const { theme, textAlign, background, quoteColor, quoteSize, author, authorColor, authorTypo, padding, content, contentPadding, textShadow, color, typography, border,
	} = attributes;

	return (
		<>
			<InspectorControls>
				<TabPanel
					className="bPlTabPanel"
					tabs={[
						{ name: "general", title: __("General") },
						{ name: "style", title: __("Style") },
					]}
				>
					{(tab) => (
						<>
							{tab.name === "general" && <>
								<PanelBody className="bPlPanelBody" title={__("Blockquote", "blockquote")}>
									<TextareaControl
										className="mt20"
										label="Quote"
										value={content}
										onChange={(val) => setAttributes({ content: val })}
									/>

									<TextControl
										className="mt20"
										autoComplete="off"
										label={__("Author", "blockquote")}
										value={author}
										onChange={(val) => setAttributes({ author: val })}
									/>
								</PanelBody>


								<PanelBody className="bPlPanelBody" title={__("Layout", "blockquote")} initialOpen={false}>
									<SelectControl
										label={__("Theme", "blockquote")}
										labelPosition="left"
										value={theme}
										onChange={(val) => {
											setAttributes({ theme: val })
											'default' === val && setAttributes({
												background: { color: '#ffcc00' },
												padding: { top: '40px', right: '60px', bottom: '40px', left: '60px' },
												border: { radius: "0px", width: "1px", color: "#000", side: "all" },
												typography: { ...typography, fontSize: { desktop: 32 }, fontFamily: "Open Sans", fontStyle: "italic", fontWeight: "400", fontVariant: "400" },
												color: '#fff',
												textShadow: [ { "hOffset": "-1px", "vOffset": "1px", "blur": "0px", "color": "#555" }],
												authorTypo: { fontSize: { desktop: 20 } },
												quoteColor: "#336699"
											});
											'theme1' === val && setAttributes({
												background: { color: '#ededed' },
												padding: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
												border: { radius: '0px', width: '8px', color: 'rgba(120, 192, 168, 1)', side: 'left' },
												typography: { ...typography, fontSize: { desktop: 24 }, fontFamily: "Open Sans", fontStyle: "italic", fontWeight: "300", fontVariant: "300i" },
												color: 'rgba(55, 34, 34, 1)',
												textShadow: [ { "hOffset": "-1px", "vOffset": "1px", "blur": "0px", "color": "#555" }],
												authorTypo: { fontSize: { desktop: 20 } },
												quoteColor: "#78C0A8",
											});
											'theme2' === val && setAttributes({
												background: { "color": "#fff" },
												padding: { "top": "24px", "right": "0px", "bottom": "24px", "left": "0px" },
												border: { radius: "0px", width: "2px", color: "#eee", side: "topBottom" },
												typography: { ...typography, fontSize: { desktop: 19 }, fontFamily: "Open Sans", fontStyle: "normal", fontWeight:300, fontVariant: "300" },
												color: "#000",
												textShadow: [],
												authorTypo: { fontSize: { desktop: 15 } },
												quoteColor: "rgba(102, 102, 102, 1)"
											});
										}}
										options={[
											{ label: "Default", value: "default" },
											{ label: "Theme 1", value: "theme1" },
											{ label: "Theme 2", value: "theme2" },
										]}
									/>
								</PanelBody>
							</>}

							{tab.name === "style" && <>
								<PanelBody className="bPlPanelBody" title={__("Wrapper", "blockquote")}>
									<Background
										label={__("BG Color", "blockquote")}
										value={background}
										onChange={(val) => setAttributes({ background: val })}
										defaultColor="#ffcc00"
										isGradient={false}
										isImage={false}
									/>

									<BoxControl
										label={__("Padding", "tcb")}
										className="mt20"
										values={padding}
										resetValues={{
											"top": "0px",
											"right": "0px",
											"bottom": "0px",
											"left": "0px"
										}}
										onChange={(value) => setAttributes({ padding: value })} />

									<BorderControl
										label={__("Border:", "blockquote")}
										value={border}
										onChange={(val) => setAttributes({ border: val })}
										defaults={{ radius: "5px" }}
									/>
								</PanelBody>

								<PanelBody className="bPlPanelBody" title={__("Content", "blockquote")} initialOpen={false}>
									<BtnGroup
										className="mt20"
										label={__("Text Align", "blockquote")}
										value={textAlign}
										onChange={(val) => setAttributes({ textAlign: val })}
										options={alignments}
										isIcon={true}
									/>

									<BoxControl
										label={__("Padding", "blockquote")}
										values={contentPadding}
										resetValues={{
											"top": "30px",
											"right": "0px",
											"bottom": "30px",
											"left": "100px"
										}}
										onChange={(value) => setAttributes({ contentPadding: value })} />
								</PanelBody>
								<PanelBody className="bPlPanelBody" title={__("Message", "blockquote")} initialOpen={false}>
									<Typography
										label={__("Typography", "blockquote")}
										value={typography}
										onChange={(val) => setAttributes({ typography: val })}
										defaults={{ fontSize: 16 }}
										produce={produce}
									/>

									<BColor
										label={__("Color", "blockquote")}
										value={color}
										onChange={(val) => setAttributes({ color: val })}
										defaultColor="#000"
									/>

									<MultiShadowControl
										className="mt20"
										label={__("Text Shadow", "blockquote")}
										value={textShadow}
										onChange={(val) => setAttributes({ textShadow: val })}
										type="text"
										produce={produce}
									/>
								</PanelBody>

								<PanelBody className="bPlPanelBody" title={__("Author", "blockquote")} initialOpen={false}>
									<Typography
										label={__("Typography", "blockquote")}
										value={authorTypo}
										onChange={(val) => setAttributes({ authorTypo: val })}
										defaults={{ fontSize: 16 }}
										produce={produce}
									/>

									<BColor
										label={__("Color", "blockquote")}
										value={authorColor}
										onChange={(val) => setAttributes({ authorColor: val })}
										defaultColor="#000"
									/>
								</PanelBody>

								<PanelBody className="bPlPanelBody" title={__("Quote", "blockquote")} initialOpen={false}>
									<BColor
										label={__("Color", "blockquote")}
										value={quoteColor}
										onChange={(val) => setAttributes({ quoteColor: val })}
										defaultColor="#000"
									/>

									<UnitControl
										label={__("Size", "blockquote")}
										className="mt20"
										labelPosition="left"
										value={quoteSize}
										onChange={(val) => setAttributes({ quoteSize: val })}
										isResetValueOnUnitChange={true}
									/>
								</PanelBody>
							</>}
						</>
					)}
				</TabPanel>
			</InspectorControls>
		</>
	);
};

export default Settings;