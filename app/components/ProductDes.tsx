"use client"
import { EditorContent, JSONContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

const ProductDes = ({content}:{content : JSONContent}) => {
    const editor = useEditor({
        editable: false,
        extensions: [
          StarterKit,
        ],
          content: content,
          editorProps: {
              attributes: {
                class:"prose prose-sm sm:prose-base"
            }
          },
    })
    
    if (!editor) {
        return null
    }
    
      return (         
              <EditorContent editor={editor} className='rounded-xl border p-4 ' />
      )
}

export default ProductDes
