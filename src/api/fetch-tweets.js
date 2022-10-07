import { useWorkspace } from "@/composables"

export const fetchTweets = async () => {
    const { program } = useWorkspace()
    const tweets = await program.value.accout.tweet.all();
    return tweets
}

