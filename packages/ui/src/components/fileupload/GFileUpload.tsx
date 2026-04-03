import React, { useMemo, useEffect, useState } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { LuCloudUpload, LuFile, LuX } from 'react-icons/lu';
import { fileUploadVariants } from './gfile-upload.variants';
import { cn } from '../../utils';
import { GButton } from '../button/GButton';

export interface GFileUploadProps extends DropzoneOptions {
  className?: string;
  label?: string;
  description?: string;
  error?: string;
  files?: File[];
  onRemove?: (file: File) => void;
}

const GFileUpload: React.FC<GFileUploadProps> = ({
  className,
  label = 'Pilih file atau tarik ke sini',
  description = 'PNG, JPG atau PDF (Maks. 5MB)',
  error,
  disabled,
  files = [],
  onRemove,
  ...props
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    disabled,
    ...props,
  });

  const [previews, setPreviews] = useState<Record<string, string>>({});

  useEffect(() => {
    const newPreviews: Record<string, string> = {};
    files.forEach((file) => {
      const key = file.name + file.size;
      if (file.type.startsWith('image/') && !previews[key]) {
        newPreviews[key] = URL.createObjectURL(file);
      }
    });

    if (Object.keys(newPreviews).length > 0) {
      setPreviews((prev) => ({ ...prev, ...newPreviews }));
    }

    return () => {
      // Basic cleanup for new objects when files change
      Object.values(newPreviews).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const status = useMemo(() => {
    if (disabled) return 'disabled';
    if (error) return 'error';
    if (isDragActive) return 'active';
    return 'default';
  }, [disabled, error, isDragActive]);

  const hasFiles = files.length > 0;

  const handleRemove = (e: React.MouseEvent, file: File) => {
    e.stopPropagation();
    if (onRemove) onRemove(file);
    
    // Revoke the URL on removal
    const key = file.name + file.size;
    if (previews[key]) {
      URL.revokeObjectURL(previews[key]);
      setPreviews((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  return (
    <div className="w-full space-y-3">
      <div
        {...getRootProps()}
        className={cn(
          fileUploadVariants({ status }),
          hasFiles && "min-h-[160px]",
          className
        )}
      >
        <input {...getInputProps()} />
        
        {!hasFiles || isDragActive ? (
          <>
            <div className={cn(
              "p-3 rounded-full bg-stone-100 text-stone-400 transition-colors duration-300",
              status === 'active' && "bg-orange-100 text-orange-500",
              status === 'error' && "bg-red-100 text-red-500"
            )}>
              <LuCloudUpload className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-stone-700">
                {isDragActive ? 'Lepas untuk upload' : label}
              </p>
              <p className="text-xs text-stone-400">{description}</p>
            </div>

            {!isDragActive && (
              <GButton
                variant="outline"
                size="sm"
                className="mt-2 pointer-events-none"
                disabled={disabled}
              >
                Pilih File
              </GButton>
            )}
          </>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-3 w-full animate-in fade-in zoom-in-95 py-4 px-2">
             {files.map((file, i) => {
               const isImage = file.type.startsWith('image/');
               const previewUrl = previews[file.name + file.size];

               return (
                 <div 
                   key={`${file.name}-${i}`} 
                   className="relative group overflow-hidden rounded-lg border border-stone-200 bg-white w-24 h-24 flex items-center justify-center p-1 shadow-sm transition-all hover:border-orange-200 hover:ring-2 hover:ring-orange-100"
                 >
                   {isImage && previewUrl ? (
                     <img src={previewUrl} alt={file.name} className="w-full h-full object-cover rounded-md" />
                   ) : (
                     <div className="flex flex-col items-center gap-1 text-stone-400">
                        <LuFile className="w-8 h-8" />
                        <span className="text-[10px] font-medium uppercase">{file.name.split('.').pop()}</span>
                     </div>
                   )}
                   
                   {/* Delete Overlay */}
                   {onRemove && (
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <button
                          type="button"
                          onClick={(e) => handleRemove(e, file)}
                          className="bg-white/20 hover:bg-white/40 text-white p-1.5 rounded-full backdrop-blur-md transition-all scale-75 group-hover:scale-100"
                          title="Hapus file"
                        >
                          <LuX className="w-5 h-5" />
                        </button>
                     </div>
                   )}
                 </div>
               );
             })}
             
             {/* Add More Trigger */}
             <div className="w-full mt-2 text-center">
                <p className="text-xs font-semibold text-orange-500 hover:text-orange-600 underline underline-offset-4 cursor-pointer transition-colors">
                  Tambah file lain...
                </p>
             </div>
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-500 font-medium px-1 text-center">{error}</p>}
    </div>
  );
};

export default GFileUpload;
export { GFileUpload };
