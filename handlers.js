module.exports = resourse => ({ axios }) => ({    
    get: async (req, res) => {
        const { data } = await axios.get(`/${ resourse }`);
        res.send(data);
    },
    post: async (req, res) => {
        const { data } = await axios.post(`/${ resourse }`, req.body);
        res.send(data);
    },
    put: async (req, res) => {
        const { data } = await axios.put(`/${ resourse }/${ req.params.id }`, req.body);
        res.send(data);
    },
    delete: async (req, res) => {
        const { data } = await axios.delete(`/${ resourse }/${ req.params.id }`);
        res.sendStatus(204);
    },
})