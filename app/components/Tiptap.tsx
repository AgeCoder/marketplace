'use client'

import { Button } from '@/components/ui/button'
import { useEditor, EditorContent, type Editor, JSONContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'


export const Menubar = ({editor}:{editor:Editor | null}) => {
    if (!editor) {
        return null
    }

    return (
        <div className='flex flex-wrap gap-2'>
            <Button
                type='button'
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                variant={editor.isActive('heading',{level:1}) ? "default" : "outline"}
            >H1</Button>
            <Button
                type='button'
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                variant={editor.isActive('heading',{level:2}) ? "default" : "outline"}
            >H2</Button>
            <Button
                type='button'
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                variant={editor.isActive('heading',{level:3}) ? "default" : "outline"}
            >H3</Button>
            <Button
                type='button'
                onClick={() => editor.chain().focus().toggleBold().run()}
                variant={editor.isActive('bold') ? "default" : "outline"}
            >Bold</Button>
            <Button
                type='button'
                onClick={() => editor.chain().focus().toggleItalic().run()}
                variant={editor.isActive('italic') ? "default" : "outline"}
            >Italic</Button>
            <Button
                type='button'
                onClick={() => editor.chain().focus().toggleStrike().run()}
                variant={editor.isActive('strike') ? "default" : "outline"}
            >Strike</Button>
            <Button
                type='button'
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                variant={editor.isActive('bulletList') ? "default" : "outline"}
           >Bullet List</Button>
        </div>
    )
}

export const Tiptap = ({json,SetJson}:{json:any,SetJson:JSONContent | null}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
      content: json ??  '<p>Hello World! 🌎️</p>',
      editorProps: {
          attributes: {
            class:"focus:outline-none prose prose-sm sm:prose-base"
        }
      },
      onUpdate: ({editor}) => {
          SetJson(editor.getJSON())
      }
  })

  return (
      <div className='flex flex-col gap-3'>
          <Menubar editor={editor} />
          <EditorContent editor={editor} className='rounded-xl border p-2 min-h-[150px]' />
    </div>
  )
}

