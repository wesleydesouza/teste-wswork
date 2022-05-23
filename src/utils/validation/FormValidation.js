import * as yup from "yup";

const FormValidation = async (data) => {
    let schema = yup.object().shape({
        model: yup.string().required(),
        mark: yup.string().required(),
        year: yup.number().required().positive().min(1000).integer(),
        fipe: yup.number().required().positive().min(1000).integer()
    });
    return await schema.isValid(data);
}

export default FormValidation;