import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { addComments, deleteComments, getComments } from "@/service/todolist/comments/comments";
import { useRouter } from "next/navigation";


export const useComment = () => {
    const [comment, setComment] = useState<string>("");
    const [seeComment, setSeeComment] = useState<string[]>([]);
    const { userId, _id } = useParams<{ userId: string, _id: string }>();
    const router = useRouter();


    const addComment = async () => {
        if (!comment.trim()) return

        const newComment = await addComments({ userId, _id, comment });

        if (newComment?.data) {
            setComment("");
        };
    };

    const deleteComment = async (comment : string) => {
        try {
            const res = await deleteComments({ userId, _id, comment});
            if(res.data) setSeeComment(res.data.comment);
        } catch (error) {
            
        }
    };

    const getComment = async () => {
        if (!userId || !_id) return
        const data = await getComments({ userId, _id });
        setSeeComment(data.data);
    };

    useEffect(() => {
        getComment();
    }, [comment])

    


    const goList = () => {
        router.push(`/view/todolist/${userId}`)
    };

    return {
        goList,
        addComment,
        deleteComment, 
        comment,
        setComment,
        seeComment,    
        _id
    }
};