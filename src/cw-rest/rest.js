/**
 * BLOCK: my-block2
 * BASE BUILD
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

registerBlockType("cw/rest-api", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("CW REST API"), // Block title.
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
	), // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "mytheme-category", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__("CW rest"), __("CW resT API"), __("create-guten-block")],
	attributes: {
		categories: {
			type: "object",
		},
		title: {
			type: "string",
		},
	},

	edit: ({ attributes, setAttributes }) => {
		// Creates a <p class='wp-block-cgb-block-my-block'></p>.
		//console.log(attributes);
		const { categories, title } = attributes;
		console.log("EDIT");
		const getData = () => {
			if (!categories) {
				wp.apiFetch({
					url: "http://localhost/firsttheme/wp-json/wp/v2/posts",
				}).then((categories) => {
					console.log(categories);
					console.log(categories[1].title.rendered);
					setAttributes({ title: categories[1].title.rendered });
				});
			}
		};
		getData();

		console.log("CATEGORIES: ", categories);
		return <div>THE TITLE IS: {title}</div>;
	},

	save: ({ attributes }) => {
		const { title } = attributes;

		return <div>THE TITLE IS: {title}</div>;
	},
});
