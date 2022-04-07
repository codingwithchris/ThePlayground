export const bindFieldsToFieldset = (fieldsetName: string, fields: any) =>
    fields.map((field: any) => {
        field.fieldset = fieldsetName;
        return field;
    });

export const bindFieldsToGroup = (groupName: string, fields: any) =>
    fields.map((field: any) => {
        field.group = groupName;
        return field;
    });
