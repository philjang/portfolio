export default function animals(req, res) {
    const animal = ['cat','dog','monkey','tiger']

    // get a random animal
    const random = animal[Math.floor(Math.random() * animal.length)]

    res.status(200).json({ animal: random})
}