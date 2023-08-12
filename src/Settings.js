import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import produce from "immer";
import {
	PanelBody, TabPanel, TextControl, TextareaControl, ToggleControl, SelectControl, __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { BorderControl, MultiShadowControl, BtnGroup, BColor, Typography } from "../../Components";

const alignments = [
	{ label: __('left', 'rating'), value: 'left', icon: 'editor-alignleft' },
	{ label: __('center', 'rating'), value: 'center', icon: 'editor-aligncenter' },
	{ label: __('right', 'rating'), value: 'right', icon: 'editor-alignright' }
];


const Settings = ({ attributes, setAttributes }) => {
	const { cId, alignment, btnLabel, btnShow, btnSkin, btnTarget, btnUrl, btnUsername, content, btnView, gap, iconStyle, skin, authorColor, descShadow, descColor, title, titleTypo, border } = attributes;

	// console.log(attributes);
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
									title={__("Manage Blockquote", "blockquote")} >

									{/* <ToggleControl className="mt20" label={__("Show / Hide button", "blockquote")} checked={btnView} onChange={(val) => setAttributes({ btnView: val })} /> */}

									<BtnGroup className="mt20" label={__("Alignment", "blockquote")} value={alignment} onChange={val => setAttributes({ alignment: val })} options={alignments} isIcon={true} />

									<Typography label={__('Text Typography', 'blockquote')} value={titleTypo} onChange={val => setAttributes({ titleTypo: val })} defaults={{ fontSize: 16 }} produce={produce} />

									<TextControl autoComplete="off" label={__("Title", "blockquote")} value={title} onChange={(val) => setAttributes({ title: val })} />

									{/* <TextControl label={__("Label", "blockquote")} value={btnLabel} onChange={(val) => setAttributes({ btnLabel: val })} /> */}

									{/* <TextControl label={__("Button Url", "blockquote")} value={btnUrl} onChange={(val) => setAttributes({ btnUrl: val })} /> */}
									{/* 
									<TextControl label={__("title", "blockquote")} value={btnUrl} onChange={(val) => setAttributes({ btnUrl: val })} /> */}

									{/* ... other controls ... */}
									<BColor label={__('Author Color', 'star-rating')} value={authorColor} onChange={val => setAttributes({ authorColor: val })} defaultColor='#0000' />

									<BColor label={__('Description Color', 'star-rating')} value={descColor} onChange={val => setAttributes({ descColor: val })} defaultColor='#0000' />

									{/* <SelectControl label="Button Skin" value={btnSkin} options={[{ label: 'Auto', value: 'auto' }, { label: 'Lazy', value: 'lazy' }, { label: 'Eager', value: 'eager' },]} onChange={(val) => setAttributes({ btnSkin: val })} />

									<SelectControl label="BlockQuotes Skin" value={skin} options={[{ label: 'Auto', value: 'auto' }, { label: 'Lazy', value: 'lazy' }, { label: 'Eager', value: 'eager' },]} onChange={(val) => setAttributes({ skin: val })} /> */}

									<TextareaControl label="Description" value={content} onChange={(val) => setAttributes({ content: val })} />

								</PanelBody>
							)}

							{tab.name === "style" && (
								<PanelBody
									className="bPlPanelBody"
									title={__("Manage Blockquote", "blockquote")}
								>
									<BorderControl label={__('Border:', 'blockquote')} value={border} onChange={val => setAttributes({ border: val })} defaults={{ radius: '5px' }} />

									<UnitControl label={__("Gap", "star-rating")} labelPosition="left" value={gap} onChange={(val) => setAttributes({ gap: val })} // units={[pxUnit(10), emUnit(1)]} isResetValueOnUnitChange={true}
									/>
									{/* <BtnGroup className="mt20" label={__("Alignment", "star-rating")} value={alignment} onChange={val => setAttributes({ alignment: val })} options={iconAlignments} isIcon={true} /> */}

									<MultiShadowControl className="mt20" value={descShadow} onChange={(val) => setAttributes({ descShadow: val })} type="text" produce={produce}
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
