/**
 * BLOCK: my-block
 * BASE BUILD
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";
import Edit from "./edit";
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
	RichText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
} = wp.blockEditor;

const { Fragment } = wp.element;

registerBlockType("ali/second-block", {
	title: __("ALI Second Block", "mytheme-blocks"),
	description: __("Our second block", "mytheme-blocks"),
	category: "mytheme-category",
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
		</svg>
	),
	keywords: [__("photo", "mytheme-blocks"), __("image", "mytheme-blocks")],

	styles: [
		{
			name: "rounded",
			label: __("Rounded", "mytheme-blocks"),
			usDefault: true,
		},
		{
			name: "outline",
			label: __("Outline", "mytheme-blocks"),
		},
		{
			name: "squared",
			label: __("Squared", "mytheme-blocks"),
		},
		{
			name: "all",
			label: __("All", "mytheme-blocks"),
		},
	],

	attributes: {
		content: {
			type: "string",
			source: "html",
			selector: "p",
		},
		alignment: {
			type: "string",
		},
		textColor: {
			type: "string",
		},
		backgroundColor: {
			type: "string",
		},
	},

	edit: Edit,

	save: ({ attributes }) => {
		const { content, alignment, backgroundColor, textColor } = attributes;
		return (
			<RichText.Content
				tagName="p"
				value={content}
				style={{
					textAlign: alignment,
					backgroundColor: backgroundColor,
					color: textColor,
				}}
			/>
		);
	},
});
