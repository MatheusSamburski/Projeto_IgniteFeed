import { format, formatDistanceToNow } from 'date-fns';
import  ptBR  from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author{   //o ts precisa entender que tipo é o parametro
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps{       //falando para o ts quais são os tipos dos parametros
    author: Author;
    publishedAt: Date;
    content: Content[];
}


export function Post({ author, publishedAt, content,}:PostProps){   //linkado o ts com os parametros da função

/*-----------------------------------variável da data de publicação---------------------------------------- */

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR,})  

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
       addSuffix: true,
    })
/*-----------------------------------variável da data de publicação---------------------------------------- */

/*-----------------------------------funções e elementos dos comentários---------------------------------------- */

    const [comments, setComments] = useState([  //estado do primeiro comentário 
        'Mandou bem!!'
    ])  

    const [newCommentText, setNewCommentText] = useState('') //estado que armazena o conteudo da textarea

    function handleCreateNewComment(event: FormEvent){  //Função para adicionar os comentários 
        event.preventDefault()                   

        setComments([...comments, newCommentText]);  //elemento criado para adicionar os comentários conforme a textarea

        setNewCommentText('');
    }

    function handleNewCommentChanche(event: ChangeEvent<HTMLTextAreaElement>){
        setNewCommentText(event.target.value);
        event.target.setCustomValidity('');
    }

    function deleteComment(commentToDelete: string){    
        const commentsListDeleteOne = comments.filter(comment => {  //criado nova lista e usado um filtro nos comentários
            return comment != commentToDelete; //filtra os comentários e retorna o comentário diferente
        })
        setComments(commentsListDeleteOne);  // atualiza lista de comentários removendo o que foi deletado 
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Digite algo para publicar")
    }

/*-----------------------------------funções e elementos dos comentários---------------------------------------- */

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
                
            </header>

            <div className={styles.content}>
               {content.map(line => {     //percorrendo o conteúdo da lista em objetos do App.jsx
                if (line.type === 'paragraph') {   //se a linha for igual paragrafo da o resultado do array no App.jsx
                    return <p key={line.content}>{line.content}</p>;    
                } else if (line.type === 'link') {   //se a linha for igual a link adiciona o resultado do array no App.jsx
                    return <p key={line.content}><a href="">{line.content}</a></p>; 
                }
               })} 
            </div>

            <form  onSubmit={handleCreateNewComment} className={styles.commentForm}>  
                <strong>Deixe seu feedback</strong> 
                <textarea 
                    name='comment' // name é o elemento puxado na função de adicionar um comentário
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChanche} //a cada vez que ouver uma mudança no textarea chama essa função
                    value={newCommentText}
                    required
                    onInvalid={handleNewCommentInvalid}
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>   
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {     //percorre os comentários conforme eles forem adicionados 
                    return <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}  // parametro criado para ser puxado no Comment.jsx para a função de exluir o comentario
                    />   
                })}
            </div>
        </article>
    )
}