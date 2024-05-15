import axios, { AxiosInstance } from "axios";

class Youtube {
  private youtube: AxiosInstance;

  constructor(httpClient: AxiosInstance) {
    this.youtube = httpClient;
  }

  async getMostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 28,
        fields: "items(id,snippet(channelId))",
        regionCode: "KR",
      },
    });
    return response.data.items as {
      id: string;
      snippet: {
        channelId: string;
      };
    }[];
  }

  async getSearchResult(query: string) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        type: "video",
        q: query,
        maxResults: 10,
        fields: "items(id(videoId),snippet(channelId))",
      },
    });
    return response.data.items.map((item: { id: { videoId: any } }) => ({ ...item, id: item.id.videoId }));
  }

  async getRcmData(videoId: string) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        type: "video",
        videoId,
        maxResults: 10,
        fields: "items(id.videoId,snippet(channelId))",
      },
    });
    return response.data.items.map((item: { id: { videoId: any } }) => ({ ...item, id: item.id.videoId }));
  }

  async fetchVideoData(videoId: string) {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet, statistics",
        id: videoId,
        fields:
          "items(id,snippet(publishedAt,title,description,thumbnails.maxres.url,thumbnails.medium.url,tags),statistics(viewCount,likeCount,commentCount))",
      },
    });
    return response.data.items[0] as {
      id: string;
      snippet: {
        publishedAt: string;
        title: string;
        description: string;
        thumbnails: {
          medium: {
            url: string;
          };
          maxres: {
            url: string;
          };
        };
        tags: string[];
      };
      statistics: {
        viewCount: string;
        likeCount: string;
        commentCount: string;
      };
    };
  }
  async fetchChannelData(channelId: string) {
    const response = await this.youtube.get("channels", {
      params: {
        part: "snippet,statistics",
        id: channelId,
        fields: "items(id,snippet(title,thumbnails.default.url),statistics(subscriberCount))",
      },
    });
    return response.data.items[0] as {
      id: string;
      snippet: {
        title: string;
        thumbnails: {
          default: {
            url: string;
          };
        };
      };
      statistics: {
        subscriberCount: string;
      };
    };
  }

  getAllData(videoId: string, channelId: string) {
    return Promise.all([this.fetchVideoData(videoId), this.fetchChannelData(channelId)] as const);
  }
}

const key = (function getKey() {
  const splitted = import.meta.env.VITE_YOUTUBE_API_KEY.split(",");
  return splitted[Math.floor(Math.random() * splitted.length)];
})();

const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key },
});

export const youtube = new Youtube(httpClient);
