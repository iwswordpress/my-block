const { __ } = wp.i18n; // Import __() from wp.i18n
const { RichText } = wp.blockEditor;
const { Component } = wp.element;

class TeamMemberEdit extends Component {
	onChangeTitle = (title) => {
		this.props.setAttributes({ title });
	};
	onChangeInfo = (info) => {
		this.props.setAttributes({ info });
	};
	render() {
		const { className, attributes } = this.props;
		const { title, info } = attributes;
		return (
			<div className={className}>
				<RichText
					className={"wp-block-mytheme-blocks-team-member__title"}
					tagName="h4"
					onChange={this.onChangeTitle}
					value={title}
					placeholder={__("Member Name", "mytheme-blocks")}
					formattingControls={[]}
				/>
				<RichText
					className={"wp-block-mytheme-blocks-team-member__info"}
					tagName="p"
					onChange={this.onChangeInfo}
					value={info}
					placeholder={__("Member Info", "mytheme-blocks")}
					formattingControls={[]}
				/>
			</div>
		);
	}
}

export default TeamMemberEdit;
