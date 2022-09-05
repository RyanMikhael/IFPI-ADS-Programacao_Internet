const Book = require('../models/book')
const Notes = require('../models/notes')

class readingController{

    async createReading(req,res){
        try{

            const {title, subtitle} = req.body
            const reading = await Book.create({...req.body, user: req.user})
            return res.send(reading)
        }
        catch(error){
            return res.status(400).json({error: "Unadded reading"})
        }
    }

    async listReading(req,res){
        try{
            const reading = await Book.findById(req.params.id).populate('user')
            return res.send({reading})
        }
        catch(error){
            return res.status(400).json({error: "Invalid reading"})
        }
    }

    async showAllReadings(req,res){
        try{
            const readings = await Book.find().populate('user').populate('notes')
            return res.send({readings})
            
        }
        catch(error){
            console.log(error)
            return res.status(400).json({error: "Operation failed"})
        }

    }

    async removeReading(req,res){
        try{
            const reading = await Book.findByIdAndDelete(req.params.id)
            return res.status(200).json({msg: "Reading removed"})
            
            
        }
        catch(error){
            return res.status().json({error: "Operation failed"})
        }
    }


    async like(req,res){
        try{
            const reading = await Book.findById(req.params.id)
            reading.like += 1
            reading.save()
            return res.status(200).json({msg: "Liked the reading"})
        }
        catch(error){
            return res.status(400).json({error: "Invalid operation"})
        }
    }


    async addNote(req,res){
        try {
            const reading = await Book.findById(req.params.id)
            const {description} = req.body
            const note = await Notes.create({description})
            reading.notes.push(note)
            reading.save()
            return res.status(201).json({msg: "Note created"})

        }

        catch(error){
            return res.status(400).json({error: "Operation failed"})
        }
    }

    async deleteNote(req,res){
        try {
            const note = await Notes.findByIdAndDelete(req.params.id)
            return res.status(200).json({msg: "Note removed"})
        }

        catch(error){
            return res.status(400).json({error: "Operation failed"})
        }
    }

    async listNote(req,res){
        try {
            const note = await Notes.findById(req.params.id)
            return res.send({note})
        }

        catch(error){
            return res.status(400).json({error: "Operation failed"})
        }
    }

    // Marcar leitura como concluida
    async readingCompleted(req,res){
        try {
            const reading = await Book.findById(req.params.id)
            if(reading.completed === false){

                reading.completed = true
            }
            else{
                reading.completed = false
            }
            reading.save()
            return res.status(200).json({msg: "Reading marked as complete"})
        }

        catch(error){
            return res.status(400).json({error: "Operation failed"})
        }
    }

    // Marcar leitura como parada
    async readingStopped(req,res){
        try {
            const reading = await Book.findById(req.params.id)
            if (reading.completed === true){
                return res.status(400).json({error: "this reading has already been completed, so it cannot be marked as stopped"})
            }
            if(reading.stopped === false){

                reading.stopped = true
            }
            else{
                reading.stopped = false
            }
            
            reading.save()
            return res.status(200).json({msg: "Reading marked as complete"})
        }

        catch(error){
            return res.status(400).json({error: "Operation failed"})
        }
    }

}

module.exports = readingController