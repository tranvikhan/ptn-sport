import { FootballMockData } from "@/models/football/entities";

export const football2023WinterMock: FootballMockData = {
  teams: {
    ["quy_rau_xanh"]: {
      id: "quy_rau_xanh",
      index: 1,
      name: "Quỷ râu xanh",
      color: "#5C16E5",
      logo: "/images/football/2023/winter/teams/quy_rau_xanh.png",
      members: [
        "Huy Truong",
        "Nguyen Ha",
        "Vu Nguyen",
        "Tan Tran",
        "Hau Luu",
        "Nhan Mai",
        "Long Tang",
      ],
    },
    ["tri_an_fc"]: {
      id: "tri_an_fc",
      index: 2,
      name: "CLB Tri Ân",
      color: "#FE3501",
      logo: "/images/football/2023/winter/teams/tri_an_fc.png",
      members: [
        "Viet Nguyen",
        "Sang Bui",
        "Bao Huynh",
        "Thuan Le",
        "Linh Pham",
        "Huy Nguyen",
      ],
    },
    ["quy_do_ptn"]: {
      id: "quy_do_ptn",
      index: 3,
      name: "Quỷ đỏ PTN",
      color: "#C23227",
      logo: "/images/football/2023/winter/teams/quy_do_ptn.png",
      members: [
        "Tho Tieu",
        "Tin Tran",
        "Chien Le",
        "Dang Nguyen",
        "Khan Tran",
        "Canh Dang",
      ],
    },
    ["che_do_ptn"]: {
      id: "che_do_ptn",
      index: 4,
      name: "Chè đỏ PTN",
      color: "#FF0100",
      logo: "/images/football/2023/winter/teams/che_do_ptn.png",
      members: [
        "Toan Tran",
        "Duy Vo",
        "Hieu Minh",
        "Hau Dang",
        "Vi Luong",
        "Tam Bui",
      ],
    },
  },
  matchRounds: [
    {
      name: "Round 1",
      matches: [
        {
          teamA: "quy_rau_xanh",
          teamB: "quy_do_ptn",
        },
        {
          teamA: "tri_an_fc",
          teamB: "che_do_ptn",
        },
      ],
    },
    {
      name: "Round 2",
      matches: [
        {
          teamA: "tri_an_fc",
          teamB: "quy_rau_xanh",
        },
        {
          teamA: "che_do_ptn",
          teamB: "quy_do_ptn",
        },
      ],
    },
    {
      name: "Round 3",
      matches: [
        {
          teamA: "quy_rau_xanh",
          teamB: "che_do_ptn",
        },
        {
          teamA: "quy_do_ptn",
          teamB: "tri_an_fc",
        },
      ],
    },
    {
      name: "Round 4",
      matches: [
        {
          teamA: "quy_do_ptn",
          teamB: "quy_rau_xanh",
        },
        {
          teamA: "che_do_ptn",
          teamB: "tri_an_fc",
        },
      ],
    },
    {
      name: "Round 5",
      matches: [
        {
          teamA: "quy_do_ptn",
          teamB: "che_do_ptn",
        },
        {
          teamA: "quy_rau_xanh",
          teamB: "tri_an_fc",
        },
      ],
    },
    {
      name: "Round 6",
      matches: [
        {
          teamA: "che_do_ptn",
          teamB: "quy_rau_xanh",
        },
        {
          teamA: "tri_an_fc",
          teamB: "quy_do_ptn",
        },
      ],
    },
  ],
  rankings: [
    { teamId: "che_do_ptn", title: "1st", color: "#dbb20b" },
    { teamId: "quy_do_ptn", title: "2nd", color: "#b0a25a" },
    { teamId: "tri_an_fc", title: "3rd", color: "#bf8150" },
    { teamId: "quy_rau_xanh", title: "3rd", color: "#bf8150" },
  ],
};
