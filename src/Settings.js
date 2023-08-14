import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import produce from "immer";
import {
	PanelBody,
	TabPanel,
	TextControl,
	TextareaControl,
	__experimentalUnitControl as UnitControl,

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
		alignment,
		bgColor,
		quoteColor,
		quoteSize,
		author,
		authorColor,
		authorTypo,
		desc,
		descShadow,
		descColor,
		descTypo,
		border,
	} = attributes;

	// console.log(bgColor);
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
										label={__("Alignment", "blockquote")}
										value={alignment}
										onChange={(val) => setAttributes({ alignment: val })}
										options={alignments}
										isIcon={true}
									/>
									<TextControl
										autoComplete="off"
										label={__("Author", "blockquote")}
										value={author}
										onChange={(val) => setAttributes({ author: val })}
									/>
									<TextareaControl
										label="Description"
										value={desc}
										onChange={(val) => setAttributes({ desc: val })}
									/>
								</PanelBody>
							)}

							{tab.name === "style" && (
								<PanelBody
									className="bPlPanelBody"
									title={__("Manage Blockquote", "blockquote")}
								>
									<Background
										label={__("BG Color", "star-rating")}
										value={bgColor}
										onChange={(val) => setAttributes({ bgColor: val })}
										defaultColor="#ffcc00"
										isGradient={false}
										isImage={false}
									/>

									<BColor
										label={__("Quote Color", "star-rating")}
										value={quoteColor}
										onChange={(val) => setAttributes({ quoteColor: val })}
										defaultColor="#0000"
									/>

									<UnitControl
										label={__("quote Size", "star-rating")}
										className="mt20"
										labelPosition="left"
										value={quoteSize}
										onChange={(val) => setAttributes({ quoteSize: val })}
										isResetValueOnUnitChange={true}
									/>

									<Typography
										label={__("Author Typography", "blockquote")}
										value={authorTypo}
										onChange={(val) => setAttributes({ authorTypo: val })}
										defaults={{ fontSize: 16 }}
										produce={produce}
									/>

									<Typography
										label={__("Desc Typography", "blockquote")}
										value={descTypo}
										onChange={(val) => setAttributes({ descTypo: val })}
										defaults={{ fontSize: 16 }}
										produce={produce}
									/>
									<BColor
										label={__("Author Color", "star-rating")}
										value={authorColor}
										onChange={(val) => setAttributes({ authorColor: val })}
										defaultColor="#0000"
									/>

									<BColor
										label={__("Description Color", "star-rating")}
										value={descColor}
										onChange={(val) => setAttributes({ descColor: val })}
										defaultColor="#0000"
									/>

									<BorderControl
										label={__("Border:", "blockquote")}
										value={border}
										onChange={(val) => setAttributes({ border: val })}
										defaults={{ radius: "5px" }}
									/>

									<MultiShadowControl
										className="mt20"
										value={descShadow}
										onChange={(val) => setAttributes({ descShadow: val })}
										type="text"
										produce={produce}
									/>
								</PanelBody>
							)}
						</>
					)}
				</TabPanel>
			</InspectorControls>
		</>
	);
};

export default Settings;