import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import produce from "immer";
import {
	PanelBody, TabPanel, TextControl, ToggleControl, SelectControl, __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { BorderControl, MultiShadowControl } from "../../Components"


const Settings = ({ attributes, setAttributes }) => {
	const { src, title, height, width, loading, border, shadow, isFullScreen } = attributes;

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
									<TextControl
										label={__("Source", "blockquote")}
										value={src}
										onChange={(val) => setAttributes({ src: val })}
									/>
									<TextControl
										label={__("title", "blockquote")}
										value={title}
										onChange={(val) => setAttributes({ title: val })}
									/>

									{/* ... other controls ... */}
									<SelectControl
										label="Loading Behavior"
										value={loading}
										options={[
											{ label: 'Auto', value: 'auto' },
											{ label: 'Lazy', value: 'lazy' },
											{ label: 'Eager', value: 'eager' },
										]}
										onChange={(val) => setAttributes({ loading: val })}
									/>
									<UnitControl
										className="mt20"
										label={__("Height", "blockquote")}
										labelPosition="left"
										value={height}
										onChange={(val) => setAttributes({ height: val })}
									/>
									<UnitControl
										className="mt20"
										label={__("Width", "blockquote")}
										labelPosition="left"
										value={width}
										onChange={(val) => setAttributes({ width: val })}
									/>
									<ToggleControl
										className="mt20"
										label={__("Show / Hide Full Screen button", "blockquote")}
										checked={isFullScreen}
										onChange={(val) => setAttributes({ isFullScreen: val })}
									/>
								</PanelBody>
							)}

							{tab.name === "style" && (
								<PanelBody
									className="bPlPanelBody"
									title={__("Manage Blockquote", "blockquote")}
								>
									<BorderControl
										label={__('Border:', 'blockquote')}
										value={border}
										onChange={val => setAttributes({ border: val })}
										defaults={{ radius: '5px' }}
									/>
									<MultiShadowControl
										className="mt20"
										value={shadow}
										onChange={(val) => setAttributes({ shadow: val })}
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
