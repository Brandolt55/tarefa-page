import React, { useState } from 'react';
import './index.scss';
import add from '../../../public/add.svg';
import edit from '../../../public/edit.svg';
import delite from '../../../public/delete.svg';
import linhaa from '../../../public/linha.svg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Tarefa = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefaEditando, setTarefaEditando] = useState(null);
  const [showExcluirModal, setShowExcluirModal] = useState(false);
  const [showEditarModal, setShowEditarModal] = useState(false);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      if (tarefaEditando !== null) {
        setTarefas(tarefas.map((tarefa) =>
          tarefa.id === tarefaEditando ? { ...tarefa, nome: novaTarefa } : tarefa
        ));
        setTarefaEditando(null);
        setNovaTarefa('');
      } else {
        setTarefas([...tarefas, { id: Date.now(), nome: novaTarefa }]);
        setNovaTarefa('');
      }
    }
  };

  const excluirTarefa = (id) => {
    setTarefaEditando(id);
    setShowExcluirModal(true);
  };

  const confirmarExclusao = (confirmar) => {
    if (confirmar) {
      setTarefas(tarefas.filter((tarefa) => tarefa.id !== tarefaEditando));
    }
    setTarefaEditando(null);
    setShowExcluirModal(false);
  };
  

  const editarTarefa = (id) => {
    const tarefaEditando = tarefas.find((tarefa) => tarefa.id === id);
    if (tarefaEditando) {
      setNovaTarefa(tarefaEditando.nome);
      setTarefaEditando(id);
      setShowEditarModal(true);
    }
  };

  const salvarEdicao = () => {
    setTarefas(tarefas.map((tarefa) =>
      tarefa.id === tarefaEditando ? { ...tarefa, nome: novaTarefa } : tarefa
    ));
    setTarefaEditando(null);
    setShowEditarModal(false);
  };

  return (
    <div className='tarefa'>
      <h1>
        Otimize seu tempo e se organize com o nosso Planejador Diário.
      </h1>

      <div className='tabela-tarefas'>
        <img className='linha-imagem' src={linhaa} alt="linha" />
        <div className='coluna-tarefas'>
          <h3>Tarefas</h3>
          <br />
          <br />
          {tarefas.map((tarefa) => (
            <div key={tarefa.id} className='tarefa-linha'>
              {tarefa.id === tarefaEditando ? (
                <div>
                  <input
                    className='input1'
                    type='text'
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                  />
                  <button className='edit' onClick={() => salvarEdicao()}>Salvar</button>
                </div>
              ) : (
                <p>{tarefa.nome}</p>
              )}
            </div>
          ))}
          {!tarefaEditando && (
            <div className='coluna-tarefas'>
              <div className='adicionar'>
                <input
                  className='input2'
                  type='text'
                  placeholder='Nova tarefa...'
                  value={novaTarefa}
                  onChange={(e) => setNovaTarefa(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
        <div className='coluna-status'>
          <h3>Status</h3>
          <div className='checkbox-linha'>
            {tarefas.map((tarefa) => (
              <div className='space' key={tarefa.id}>
                <div className="checkbox-wrapper-19">
                  <input type="checkbox" id={`cbtest-19-${tarefa.id}`} />
                  <label htmlFor={`cbtest-19-${tarefa.id}`} className="check-box"></label>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='coluna-opcoes'>
          <h3>Opções</h3>
          <div className='linhas-opções'>
            {tarefas.map((tarefa) => (
              <div key={tarefa.id} className='opcoes-container'>
                <img
                  src={delite}
                  alt='delete'
                  onClick={() => excluirTarefa(tarefa.id)}
                />
                <img
                  src={edit}
                  alt='edit'
                  onClick={() => editarTarefa(tarefa.id)}
                />
              </div>
            ))}
            {!tarefaEditando && (
              <div className='adicionar'>
                <img
                  className='icone-adicionar'
                  onClick={adicionarTarefa}
                  src={add}
                  alt="add"
                />
              </div>
            )}
          </div>
        </div>

        <img className='linha-imagem' src={linhaa} alt="linha" />
      </div>

      {/* Modal de Exclusão */}
{/* Modal de Exclusão */}
<Modal show={showExcluirModal} onHide={() => setShowExcluirModal(false)}>
  <Modal.Footer closeButton>
    <h3 className='titlemodall modal-title'>Deseja excluir esse item</h3>
  </Modal.Footer>
  <Modal.Footer>
    <p className='Ptext modal-text'>Tarefa: {tarefas.find(tarefa => tarefa.id === tarefaEditando)?.nome}</p>
  </Modal.Footer>
  <Modal.Footer className="modal-buttons">
    <Button variant="secondary" onClick={() => confirmarExclusao(true)}>Sim</Button>
    <Button variant="primary" onClick={() => confirmarExclusao(false)}>Não</Button>
  </Modal.Footer>
</Modal>

{/* Modal de Edição */}
<Modal show={showEditarModal} onHide={() => setShowEditarModal(false)}>
  <Modal.Footer closeButton>
    <h3 className='titlemodall modal-title'>Deseja editar esse item</h3>
  </Modal.Footer>
  <Modal.Footer>
    <p className='Ptext modal-text'>Tarefa: {tarefas.find(tarefa => tarefa.id === tarefaEditando)?.nome}</p>
  </Modal.Footer>
  <Modal.Footer className="modal-buttons">
    <Button variant="secondary" onClick={salvarEdicao}>Não</Button>
    <Button variant="primary" onClick={() => setShowEditarModal(false)}>Sim</Button>
  </Modal.Footer>
</Modal>

    </div>
  );
};

export default Tarefa;
