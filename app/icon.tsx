import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20, // Tamanho menor para o emoji se ajustar
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1E293B', // Fundo azul escuro
          color: 'white',
          borderRadius: '50%',
        }}
      >
        👨‍💻
      </div>
    ),
    {
      ...size,
    }
  )
}