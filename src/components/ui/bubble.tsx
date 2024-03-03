export function Bubble({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex items-center justify-center py-1.5 px-3 bg-secondary rounded-lg">
        {children}
      </div>
    );
  }