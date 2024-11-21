
interface Props {
    show: boolean;
    onClose: () => void;
    errorMessage?: string;
}



export function ErrorModal({ show, onClose, errorMessage = '' }: Props) {
    return (
        <>
            {show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-page_background2 w-11/12 max-w-md rounded-lg shadow-lg p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-red-600">Error</h2>
                            <button
                                onClick={onClose}
                                className="text-red-600 hover:text-gray-700 focus:outline-none"
                            >
                                ✖
                            </button>
                        </div>
                        <p className="text-red-900">{errorMessage || "Ha ocurrido un error al intentar iniciar sesión. Por favor, inténtelo de nuevo."}</p>
                        <div className="mt-6 text-right">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-red-900 focus:outline-none"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}