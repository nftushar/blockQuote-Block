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
	const {
		cId,
		textAlign,
		background,
		quoteColor,
		quoteSize,
		author,
		authorColor,
		authorTypo,
		quotePadding,
		content,
		textShadow,
		color,
		typography,
		border,
	} = attributes;

	// console.log(background);
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
							{tab.name === "general" && (
								<PanelBody
									className="bPlPanelBody"
									title={__("Manage Blockquote", "blockquote")}
								>

									<BtnGroup
										className="mt20"
										label={__("textAlign", "blockquote")}
										value={textAlign}
										onChange={(val) => setAttributes({ textAlign: val })}
										options={alignments}
										isIcon={true}
									/>
									<PanelBody className='bPlPanelBody' title={__('Tab/Menu', 'stepped-content')}>
										<BoxControl
											label={__("Padding", "tcb")}
											values={quotePadding}
											resetValues={{
												"top": "0px",
												"right": "0px",
												"bottom": "0px",
												"left": "0px"
											}}
											onChange={(value) => setAttributes({ quotePadding: value })} />
									</PanelBody>
									<TextControl
										autoComplete="off"
										label={__("Author", "blockquote")}
										value={author}
										onChange={(val) => setAttributes({ author: val })}
									/>
									<TextareaControl
										label="Description"
										value={content}
										onChange={(val) => setAttributes({ content: val })}
									/>
								</PanelBody>
							)}

							{tab.name === "style" && <>
								<PanelBody
									className="bPlPanelBody"
									title={__("Wrapper", "blockquote")}
								>
									<Background
										label={__("BG Color", "blockquote")}
										value={background}
										onChange={(val) => setAttributes({ background: val })}
										defaultColor="#ffcc00"
										isGradient={false}
										isImage={false}
									/>






									<BorderControl
										label={__("Border:", "blockquote")}
										value={border}
										onChange={(val) => setAttributes({ border: val })}
										defaults={{ radius: "5px" }}
									/>


								</PanelBody>


								<PanelBody className="bPlPanelBody" title={__("Content", "blockquote")} initialOpen={false}>

									<Typography
										label={__("content Typography", "blockquote")}
										value={typography}
										onChange={(val) => setAttributes({ typography: val })}
										defaults={{ fontSize: 16 }}
										produce={produce}
									/>


									<BColor
										label={__("Color", "blockquote")}
										value={color}
										onChange={(val) => setAttributes({ color: val })}
										defaultColor="#0000"
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
										defaultColor="#0000"
									/>
								</PanelBody>


								<PanelBody className="bPlPanelBody" title={__("Quote", "blockquote")} initialOpen={false}>
									<BColor
										label={__("Color", "blockquote")}
										value={quoteColor}
										onChange={(val) => setAttributes({ quoteColor: val })}
										defaultColor="#0000"
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