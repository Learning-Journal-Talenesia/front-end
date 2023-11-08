import AxiosInstance from "../lib/Axios";

const Question = {
  async getQuestionThemaId({ idThema, idUser }) {
    try {
      const res = await AxiosInstance.get(`/q/thema/${idThema}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  async getQuestionById(id) {
    try {
      const res = await AxiosInstance.get(`/q/${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};

export default Question;
