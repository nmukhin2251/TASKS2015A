define([], function( ) { return  JSON.stringify(
{
	"localVersion": 1515382362377,
	"serverVersion": 1515382362377,
	"components": [
		{
			"Title": "Task",
			"ContentTypeId": "0x01080048257DEE240A494CAD10FDAFDE09FABB",
			"Require": {
				"name": "task",
				"proto": false,
				"path": "task"
			},
			"Markup": {
				"tag": "component-task"
			},
			"Params": {}
		}
	],
	"columns": {
		"Title": "<Field ID=\"{fa564e0f-0c70-4ab9-b863-0177e6ddd247}\" Type=\"Text\" Name=\"Title\" DisplayName=\"Task Name\" Required=\"TRUE\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Title\" FromBaseType=\"TRUE\" Sealed=\"TRUE\" ColName=\"nvarchar1\" />",
		"Attachments": "<Field ID=\"{67df98f4-9dec-48ff-a553-29bece9c5bf4}\" ColName=\"tp_HasAttachment\" RowOrdinal=\"0\" Type=\"Attachments\" Name=\"Attachments\" DisplayName=\"Attachments\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"Attachments\" FromBaseType=\"TRUE\" />",
		"PercentComplete": "<Field Type=\"Number\" Name=\"PercentComplete\" ID=\"{d2311440-1ed6-46ea-b46d-daa643dc3886}\" Percentage=\"TRUE\" Min=\"0\" Max=\"1\" DisplayName=\"% Complete\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"PercentComplete\" ColName=\"float1\"><Default>0</Default></Field>",
		"mwp_FormID": "<Field ID=\"{3c53b379-6256-4ab5-bc14-8fa61360e526}\" Type=\"Text\" Name=\"mwp_FormID\" Required=\"FALSE\" DisplayName=\"Form ID\" Description=\"Unique Form Identificator\" Group=\"Medline Web Portal\" SourceID=\"{cbfbae2b-8362-4201-ac65-6a64a7d1d411}\" StaticName=\"mwp_FormID\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar5\" RowOrdinal=\"0\"><Default>0</Default></Field>",
		"mwp_FormType": "<Field ID=\"{ac53b379-6156-4aa5-bc14-8fa6136be526}\" Type=\"Text\" Name=\"mwp_FormType\" Required=\"FALSE\" DisplayName=\"Form Type\" Description=\"Give SPA Form Name\" Group=\"Medline Web Portal\" SourceID=\"{cbfbae2b-8362-4201-ac65-6a64a7d1d411}\" StaticName=\"mwp_FormType\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar6\" RowOrdinal=\"0\"><Default>Generic SPA Form</Default></Field>",
		"mwp_FormState": "<Field ID=\"{2223b379-4a56-25b5-bc14-8f3c5360e526}\" Type=\"Text\" Name=\"mwp_FormState\" Required=\"FALSE\" DisplayName=\"Form State\" Description=\"Form State\" Group=\"Medline Web Portal\" SourceID=\"{cbfbae2b-8362-4201-ac65-6a64a7d1d411}\" StaticName=\"mwp_FormState\" AllowDeletion=\"TRUE\" Version=\"1\" Customization=\"\" ColName=\"nvarchar7\" RowOrdinal=\"0\"><Default>Draft</Default></Field>",
		"mwp_Attachments": "<Field Type=\"Note\" DisplayName=\"Attachments Map\" Group=\"_Hidden\" EnforceUniqueValues=\"FALSE\" Required=\"FALSE\" ID=\"{17117ed8-0696-4031-b721-2ef99de31109}\" Name=\"mwp_Attachments\" StaticName=\"mwp_Attachments\" Sortable=\"FALSE\" RichText=\"FALSE\" RichTextMode=\"Compatible\" IsolateStyles=\"FALSE\" AppendOnly=\"FALSE\" UnlimitedLengthInDocumentLibrary=\"FALSE\" NumLines=\"6\" SourceID=\"{daf8e407-d019-4c86-ba35-822c1763ac52}\" Version=\"1\" ColName=\"ntext4\" RowOrdinal=\"0\" />",
		"StartDate": "<Field ID=\"{64cd368d-2f95-4bfc-a1f9-8d4324ecb007}\" Type=\"DateTime\" Name=\"StartDate\" DisplayName=\"Start Date\" Format=\"DateOnly\" FriendlyDisplayFormat=\"Relative\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"StartDate\" ColName=\"datetime1\" />",
		"DueDate": "<Field Type=\"DateTime\" ID=\"{cd21b4c2-6841-4f9e-a23a-738a65f99889}\" Name=\"DueDate\" DisplayName=\"Due Date\" Format=\"DateOnly\" FriendlyDisplayFormat=\"Relative\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"DueDate\" ColName=\"datetime2\" />",
		"AssignedTo": "<Field ID=\"{53101f38-dd2e-458c-b245-0c236cc13d1a}\" Type=\"UserMulti\" List=\"UserInfo\" Name=\"AssignedTo\" Mult=\"TRUE\" Sortable=\"FALSE\" ShowField=\"ImnName\" DisplayName=\"Assigned To\" SourceID=\"http://schemas.microsoft.com/sharepoint/v3\" StaticName=\"AssignedTo\" ColName=\"int2\" />"
	}
}
);});