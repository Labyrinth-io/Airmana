import React, { ReactNode } from 'react';
import { Rnd } from 'react-rnd';
import { useAdmin } from '../contexts/AdminContext';

interface EditableElementProps {
  id: string;
  children: ReactNode;
  className?: string;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number | string; height: number | string };
}

export const EditableElement: React.FC<EditableElementProps> = ({
  id,
  children,
  className = '',
  defaultPosition = { x: 0, y: 0 },
  defaultSize = { width: 'auto', height: 'auto' }
}) => {
  const { session, isEditMode, layoutData, updateLayout } = useAdmin();

  const elementLayout = layoutData[id];
  const position = elementLayout ? { x: elementLayout.x, y: elementLayout.y } : defaultPosition;
  const size = elementLayout ? 
    { width: elementLayout.width, height: elementLayout.height } : 
    defaultSize;

  if (!session.isAuthenticated || !isEditMode) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Rnd
      position={position}
      size={size}
      onDragStop={(e, d) => {
        updateLayout(id, { x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        updateLayout(id, {
          x: position.x,
          y: position.y,
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
      className={`${className} ${isEditMode ? 'border-2 border-dashed border-emerald-500' : ''}`}
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
      bounds="parent"
    >
      {children}
    </Rnd>
  );
};