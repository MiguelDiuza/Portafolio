import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

/**
 * Escena 3D de Spline cargada de forma diferida (el runtime es pesado).
 * Mientras carga muestra un loader sutil.
 */
export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className="spline-fallback">
          <span className="spline-loader" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}

export default SplineScene;
