import "./style.editor.scss";
import "./parent";
import edit from "./edit";
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.blockEditor; // Import RichText()) from wp.blockEditor

const attributes = {
	title: {
		type: "string",
		source: "html",
		selector: "h4",
	},
	info: {
		type: "string",
		source: "html",
		selector: "p",
	},
};

registerBlockType("mytheme-blocks/team-member", {
	title: __("Team Member", "mytheme-blocks"),

	description: __(" Block showing a Team Member. ", "mytheme-blocks"),

	icon: "admin-users",
	parent: ["mytheme-blocks/team-members"],

	category: "mytheme-category",

	keywords: [
		__("team", "mytheme-blocks"),
		__("member", "mytheme-blocks"),
		__("person", "mytheme-blocks"),
	],

	attributes,

	save: ({ attributes }) => {
		const { title, info } = attributes;
		return (
			<div>
				{title && (
					<RichText.Content
						className={"wp-block-mytheme-blocks-team-member__title"}
						tagName="h4"
						value={title}
					/>
				)}
				{info && (
					<RichText.Content
						className={"wp-block-mytheme-blocks-team-member__info"}
						tagName="p"
						value={info}
					/>
				)}
			</div>
		);
	},

	edit,
});
