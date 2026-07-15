const notFoundHandler = (req, res) => {
     res.status(404).json({ errorMsg: `Ruta no encontrada: ${req.method} ${req.originalUrl}` })
}

export default notFoundHandler