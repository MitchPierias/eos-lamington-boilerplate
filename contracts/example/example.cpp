#include <eosio/eosio.hpp>
#include <eosio/singleton.hpp>
#include <string>

using namespace eosio;
using std::string;

class [[eosio::contract("example")]] example : public contract {

public:

    using contract::contract;

    [[eosio::action]] void ping(string message) {

        print(message);
    }
    
private:

    struct [[eosio::table]] state_row {
        uint64_t count = 0;
    };

    typedef eosio::singleton<"state"_n, state_row> state_table;

    state_table state;
};