'use client'
import { useComment } from "@/hook/useComment";
import { TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";



const Comments = () => {
  const {
    comment,
    setComment,
    seeComment,
    addComment,
    deleteComment,
    goList,
  } = useComment();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-6">

        {/* Encabezado de la página */}
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
          <div>
            <h1 className="text-xl font-bold tracking-wide text-slate-100">
              Comentarios de la Tarea
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              ID de Tarea: <span className="font-mono text-violet-400"></span>
            </p>
          </div>
          <button
            onClick={goList}
            className="bg-slate-800 hover:bg-slate-700 active:scale-[0.98] text-slate-300 font-semibold text-xs py-2 px-4 rounded-lg transition-all duration-200 border border-slate-700/50"
          >
            Volver a la lista
          </button>
        </div>

        {/* Contenedor de Comentarios */}
        <div className="flex flex-col gap-3 max-h-[350px] overflow-y-auto pr-1">
          {!seeComment || seeComment.length === 0 ? (
            <p className="text-sm text-slate-500 text-center py-4">No hay comentarios en esta tarea aún.</p>
          ) : (
            seeComment.map((com, key) => (
              <div
                key={key}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-row justify-between items-center gap-4 transition-all hover:border-slate-700/50"
              >
                <p className="text-sm text-slate-300 break-words font-medium flex-1">
                  {com}
                </p>


                <Button onClick={() => deleteComment(com)} isIconOnly variant="danger" className="flex-shrink-0">
                  <TrashBin />
                </Button>
              </div>
            ))
          )}
        </div>

        {/* Formulario para añadir un nuevo comentario */}
        <form className="flex flex-col gap-3 mt-2">
          <div className="relative">
            <textarea
              value={comment}
              onChange={(e) => { setComment(e.target.value) }}
              placeholder="Escribe un comentario o nota sobre el progreso..."
              rows={3}
              maxLength={200}
              className="w-full bg-slate-950 border border-slate-800 focus:border-violet-500/80 rounded-xl p-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none transition-all duration-200 resize-none font-medium"
            />
            <span className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-600">

            </span>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={addComment}
              className="w-full sm:w-auto bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:hover:bg-violet-600 disabled:cursor-not-allowed active:scale-[0.98] text-white font-semibold text-xs py-2.5 px-5 rounded-lg transition-all duration-200 shadow-lg shadow-violet-600/10"
            >
              Publicar comentario
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};


export default Comments