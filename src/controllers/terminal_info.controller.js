import TerminalInfo from "../models/terminal_info.model";

const createTerminalFunction = async (req, res) => {
  try {
    const data = req.body;
    const createTerminal = await TerminalInfo.create(data);
    if (createTerminal) {
      res.status(201).send({ message: "create success" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateTerminalTypeFunction = async (req, res) => {
  try {
    const id = req.body.TERM_ID;
    const terminal_type = req.body.TERMINAL_TYPE;

    const updateTerminalType = await TerminalInfo.update(
      { TERMINAL_TYPE: terminal_type },
      { where: { TERM_ID: id } }
    );
    if (updateTerminalType) {
      res.status(200).send({ message: "update success" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findAllTerminalFunction = async (req, res) => {
  try {
    const findAllTerminal = await TerminalInfo.findAll();
    if (findAllTerminal) {
      res.status(200).send(findAllTerminal);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findOneTerminalFunction = async (req, res) => {
  try {
    const term_id = req.params.id;
    const findOneTerminal = await TerminalInfo.findOne({
      where: { TERM_ID: term_id },
    });
    if (findOneTerminal) {
      res.status(200).send(findOneTerminal);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteTerminalFunction = async (req, res) => {
  try {
    const term_id = req.params.id;
    const deleteTerminal = await TerminalInfo.destroy({
      where: { TERM_ID: term_id },
    });
    //if must to check deleteTerminal check value 0 or 1 to send response
    res.status(200).send({message : "delete success"});
    
    
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export {
  createTerminalFunction,
  updateTerminalTypeFunction,
  findAllTerminalFunction,
  findOneTerminalFunction,
  deleteTerminalFunction,
};
